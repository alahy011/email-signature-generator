import Head from "next/head";
import MultiStepForm from "@/components/MultiStepForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Email Signature Generator</title>
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
        <h1 className="text-3xl font-bold text-center mb-10">📬 Email Signature Generator</h1>
        <MultiStepForm />
      </main>
    </>
  );
}
