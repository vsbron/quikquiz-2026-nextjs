function ErrorMessage({ error }: { error: Error }) {
  // Returned JSX
  return (
    <details className="mt-4 opacity-80 mb-5">
      <summary className="cursor-pointer">Technical details</summary>
      <pre className=" bg-white border border-chocolate/50 rounded-md p-3 mt-2 text-sm whitespace-pre-wrap">
        {error.message}
      </pre>
    </details>
  );
}

export default ErrorMessage;
