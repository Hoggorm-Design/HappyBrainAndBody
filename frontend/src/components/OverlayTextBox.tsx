import { motion } from "framer-motion";

interface OverlayTextBoxProps {
    heading?: string; // Optional heading
    text: string; // Required text
    slideFrom: "left" | "right"; // Direction of animation
    bgColor?: string; // Optional background color
    textColor?: string; // Optional text color
    textShadowColor?: string; // Optional text shadow color
    textCenter?: boolean; // Optional text centering
    width?: string; // Optional width in Tailwind format
    className?: string; // Optional className for additional Tailwind classes
}

const OverlayTextBox: React.FC<OverlayTextBoxProps> = ({
                                                           heading,
                                                           text,
                                                           slideFrom,
                                                           bgColor = "bg-black",
                                                           textColor = "text-white",
                                                           textShadowColor = "black",
                                                           width = "w-full",
                                                           textCenter = false,
                                                           className = "",

                                                       }) => {
    // Define animation variations based on the direction of the animation
    const variants = {
        hidden: { opacity: 0, x: slideFrom === "left" ? -100 : 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className={`${bgColor} ${textColor} ${className} ${width} bg-opacity-50 rounded-xl p-8 shadow-lg ${textCenter ? "text-center" : ""}`} // Use Tailwind classes for width
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 1 }} // Animation duration
            viewport={{ once: true, amount: 0.3 }} // Ensure animation only plays once
        >
            {/* Optional heading */}
            {heading && (
                <h2
                    className="header 2xl:text-3xl font-bold mb-4"
                    style={{ textShadow: `1px 1px 3px ${textShadowColor}` }} // Applying custom text shadow
                >
                    {heading}
                </h2>
            )}
            {/* Text */}
            <p
                className="text xl:text-[1.75vw]"
                style={{ textShadow: `1px 1px 2px ${textShadowColor}` }} // Applying custom text shadow
            >
                {text}
            </p>
        </motion.div>
    );
};

export default OverlayTextBox;