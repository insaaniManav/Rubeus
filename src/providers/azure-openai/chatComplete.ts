import { ChatCompletionResponse, ProviderConfig } from "../types";

// TODOS: this configuration does not enforce the maximum token limit for the input parameter. If you want to enforce this, you might need to add a custom validation function or a max property to the ParameterConfig interface, and then use it in the input configuration. However, this might be complex because the token count is not a simple length check, but depends on the specific tokenization method used by the model.

export const AzureOpenAIChatCompleteConfig: ProviderConfig = {
  model: {
    param: "model"
  },
  messages: {
    param: "messages",
    default: "",
  },
  functions: {
    param: "functions",
  },
  function_call: {
    param: "function_call",
  },
  max_tokens: {
    param: "max_tokens",
    default: 100,
    min: 0,
  },
  temperature: {
    param: "temperature",
    default: 1,
    min: 0,
    max: 2,
  },
  top_p: {
    param: "top_p",
    default: 1,
    min: 0,
    max: 1,
  },
  n: {
    param: "n",
    default: 1,
  },
  stream: {
    param: "stream",
    default: false,
  },
  stop: {
    param: "stop",
  },
  presence_penalty: {
    param: "presence_penalty",
    min: -2,
    max: 2,
  },
  frequency_penalty: {
    param: "frequency_penalty",
    min: -2,
    max: 2,
  },
  logit_bias: {
    param: "logit_bias",
  },
  user: {
    param: "user",
  },
};

interface AzureOpenAIChatCompleteResponse extends ChatCompletionResponse {}

export const AzureOpenAIChatCompleteResponseTransform: (response: AzureOpenAIChatCompleteResponse) => ChatCompletionResponse = (response) => response;
