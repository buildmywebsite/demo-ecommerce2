// Simple toast hook implementation
export function useToast() {
  const toast = ({ title, description }: { title: string; description: string }) => {
    console.log(`${title}: ${description}`);
    // This is a simple implementation for the UI-only version
    // In a real app, this would show a toast notification
  };

  return { toast };
}