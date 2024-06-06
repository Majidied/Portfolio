import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="relative flex flex-col">
            <div className="bg-white h-[1px] mb-4"></div>

            <div className="flex justify-center items-center gap-8 mb-6">
                <div
                    className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
                    onClick={() =>
                        window.open( "_blank")
                    }
                >
                    <FaFacebookF />
                </div>

                <div
                    className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
                    onClick={() =>
                        window.open( "_blank")
                    }
                >
                    <FaInstagram />
                </div>

                <div
                    className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
                    onClick={() =>
                        window.open(
                            "_blank"
                        )
                    }
                >
                    <FaYoutube />
                </div>

                <div
                    className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
                    onClick={() =>
                        window.open(
                            "_blank"
                        )
                    }
                >
                    <FaLinkedinIn />
                </div>

                <div
                    className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
                    onClick={() =>
                        window.open(
                            "_blank"
                        )
                    }
                >
                    <SiUpwork />
                </div>
            </div>

            <p className="relative bottom-2 text-center text-sm">
                &#169; Lahlaouti  Haitam && Majidi Mohammed - 2024.
            </p>
        </footer>
    );
};

export default Footer;
