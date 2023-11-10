import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Configuration, OpenAIApi } from "openai";

interface MessageStore {
  messages: IMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: MessageStore = {
  messages: [{ id: 1, text: "Привет, чем я могу помочь?", type: "ai" }],
  loading: false,
  error: null,
};

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (newMessage: MessageType) => {
    try {
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: newMessage.text },
        ],
      });

      const response = completion.data.choices[0].message?.content;

      return response;
    } catch (error) {
      alert(error);
      throw new Error("Failed to send message");
    }
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<MessageType>) {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action: any) => {
        state.loading = false;
        const aiMessage = {
          id: state.messages.length + 1,
          text: action.payload,
          type: "ai",
        };
        state.messages.push(aiMessage);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to send message";
      });
  },
});

export const messageReducer = messageSlice.reducer;
