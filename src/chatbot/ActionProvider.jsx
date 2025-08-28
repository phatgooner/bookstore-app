import axios from "axios";
import books from '../data/generateData';
import { createClientMessage } from "react-chatbot-kit";
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    };

    handleBookAdvice = () => {
        const userMsg = this.createClientMessage("Tư vấn chọn sách");
        const botMsg = this.createChatBotMessage("Bạn muốn tìm sách thuộc lĩnh vực nào?");

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, userMsg, botMsg],
        }));
    };

    handleMessage = async (message) => {
        let botMessage = this.createChatBotMessage("Đang lấy dữ liệu...", { loading: true });
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

        const prompt = `
Bạn là 1 trợ lý ảo chuyên tư vấn sách của 1 nhà sách.
Có một người dùng nhắn tin với bạn như sau: "${message}". Hãy trả lời người dùng một cách thân thiện nhất.
Nếu tin nhắn đó của người dùng có liên quan tới tìm sách thì hãy gợi ý cho người dùng 1 quyển sách phù hợp và nêu ra lý do.
Trung tâm có thư viện sách như sau:
${books.map((b, index) => `-${index + 1}. Tiêu đề: ${b.title}, tác giả: ${b.author}, đánh giá: ${b.rating} sao, thể loại: ${b.type}, ngôn ngữ ${b.language}, giá gốc ${b.price} USD, hiện đang khuyến mãi ${b.discount}% còn ${b.currentPrice.toFixed(2)} USD`).join("\n")}.
`;
        try {
            const res = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: prompt }],
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const reply = res.data.choices[0].message.content;
            botMessage = this.createChatBotMessage(reply, { loading: false });

            this.setState((prev) => {
                const prevMessages = [...prev.messages];
                prevMessages.pop();
                return ({
                    ...prev,
                    messages: [...prevMessages, botMessage],
                })
            });
        } catch (error) {
            const errorMessage = this.createChatBotMessage(
                "Xin lỗi, tôi gặp lỗi khi phản hồi."
            );
            this.setState((prev) => {
                const prevMessages = [...prev.messages];
                prevMessages.pop();
                return ({
                    ...prev,
                    messages: [...prevMessages, errorMessage],
                })
            });
        }
    };
}

export default ActionProvider;