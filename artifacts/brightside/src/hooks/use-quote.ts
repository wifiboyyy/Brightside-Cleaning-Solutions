import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitQuote } from "@workspace/api-client-react";
import type { QuoteRequest, QuoteResponse, ErrorType } from "@workspace/api-client-react";

export function useCreateQuote() {
  const queryClient = useQueryClient();
  
  return useMutation<QuoteResponse, ErrorType<void>, QuoteRequest>({
    mutationFn: async (data: QuoteRequest) => {
      // Use the generated fetcher from the workspace API client
      const response = await submitQuote(data);
      return response;
    },
    onSuccess: () => {
      // Invalidate if there were list queries, though this is a public submission form
      queryClient.invalidateQueries({ queryKey: ['quotes'] });
    },
  });
}
