import { RefObject } from "react";
import html2canvas from "html2canvas";

import ExternalLink from "@/components/ExternalLink";

import { LINKS } from "@/utils/constants";
import { FaDownload } from "react-icons/fa";
import { RiTelegram2Fill, RiWhatsappFill } from "react-icons/ri";

// Props interface
interface ShareProps {
  ref: RefObject<HTMLDivElement | null>;
  score: number;
  quizName: string;
  difficulty: Difficulty;
}

// The component
function Share({ ref, score, quizName, difficulty }: ShareProps) {
  // Prepare some data
  const url = encodeURIComponent(
    `${process.env.NEXT_PUBLIC_DOMAIN}${LINKS.CATEGORIES}`,
  );
  const title = encodeURIComponent(
    `Hey! I scored ${score} points in ${quizName} quiz on ${difficulty} difficulty. Can you beat my score?`,
  );

  // Download image handler
  const handleDownload = async () => {
    // Guard clause
    if (!ref.current) return;

    // Set the canvas and image type
    const canvas = await html2canvas(ref.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });
    const dataUrl = canvas.toDataURL("image/png");

    // Create link object and execute it
    const link = document.createElement("a");
    link.download = "quikquiz-results.png";
    link.href = dataUrl;
    link.click();
  };

  // Returned JSX
  return (
    <div className="text-center mt-1 mb-8 mx-auto text-lg sm:text-xl bg-white pt-2 pb-4 border border-chocolate rounded-xl max-w-60">
      <h4 className="mb-1">Share your results</h4>
      <div className="flex justify-center gap-5">
        <FaDownload
          onClick={handleDownload}
          className="w-6 h-6 fill-chocolate hover:fill-accent transition-colors cursor-pointer"
        />
        <ExternalLink url={`https://t.me/share/url?url=${url}&text=${title}`}>
          <RiTelegram2Fill className="w-6 h-6 fill-chocolate hover:fill-[#0088CC] transition-colors" />
        </ExternalLink>
        <ExternalLink
          url={`https://api.whatsapp.com/send?text=${url}%20${title}`}
        >
          <RiWhatsappFill className="w-6 h-6 fill-chocolate hover:fill-[#25D366] transition-colors" />
        </ExternalLink>
      </div>
    </div>
  );
}

export default Share;
