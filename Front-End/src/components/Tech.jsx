import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import $ from "jquery";

const Tech = ({ selectedCategory }) => {
    const [technologies, setTechnologies] = useState([]);
    const [filteredTechnologies, setFilteredTechnologies] = useState([]);

    // Fetch technologies from the API
    const fetchTechnologies = () => {
        return $.ajax({
            url: "http://127.0.0.1:8000/api/skills",
            method: "GET",
        });
    };

    // Fetch technologies on component mount
    useEffect(() => {
        fetchTechnologies()
            .done((data) => {
                console.log("Fetched technologies:", data);
                if (data && data.technologies) {
                    setTechnologies(data.technologies);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .fail((error) => {
                console.error("Error fetching technologies:", error);
            });
    }, []);

    // Filter technologies based on selectedCategory
    useEffect(() => {
        if (selectedCategory) {
            const filteredTech = technologies.filter(
                (tech) => tech.category === selectedCategory
            );
            setFilteredTechnologies(filteredTech);
        } else {
            setFilteredTechnologies(technologies);
        }
    }, [selectedCategory, technologies]);

    // Render the filtered technologies
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {filteredTechnologies.length > 0 ? (
                filteredTechnologies.map(({ title, url }, index) => (
                    <div className="w-28 h-28" key={index}>
                        <BallCanvas icon={url} />
                        <p className="text-center text-blue-900 text-[14px] mb-12 cursor-default">
                            {title}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-center text-blue-900">No technologies found.</p>
            )}
        </div>
    );
};

export default Tech;
