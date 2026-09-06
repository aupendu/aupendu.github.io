const talks = [
    {
        lead: "Delivered a talk at the Faculty Development Program",
        details: "on “Hand-crafted Features to Zero-shot Intelligence: The Evolution of Machine Learning” at the Institute of Engineering & Management (IEM), Salt Lake, Kolkata, on 23 March 2026."
    },
    {
        lead: "Organized a tutorial titled",
        details: "“Advances and Challenges in Real-World Video Restoration” at the 16th Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP), December 2025."
    },
    {
        lead: "Delivered an industry talk titled",
        details: "“Sound and Vision Revolution by Dolby” at the Institute of Engineering & Management (IEM), Salt Lake Campus, on 30 August 2024."
    },
    {
        lead: "Taught deep learning tutorials",
        details: "for the Short Term Course on Machine Vision for Robot Applications in Manufacturing (19 May 2022)."
    },
    {
        lead: "Taught deep learning tutorials",
        details: "for Deep Learning for Visual Computing (DLVC) summer and winter school (2017–2018)."
    }
];

function renderTalks(list, limit) {
    const visibleTalks = typeof limit === "number" ? talks.slice(0, limit) : talks;

    visibleTalks.forEach((talk) => {
        const item = document.createElement("li");
        const lead = document.createElement("b");
        lead.textContent = talk.lead;
        item.append(lead, " ", document.createTextNode(talk.details));
        list.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-talks-list]").forEach((list) => {
        const limit = list.dataset.talksLimit ? Number(list.dataset.talksLimit) : undefined;
        renderTalks(list, limit);
    });
});
