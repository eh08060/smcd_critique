const reference = [
  {
    author: "",
    title: "",
    year: "",
    sourceTitle: "",
    link: "https://unsplash.com/@ilon_a",
  },
  {
    author: "ash thorp",
    title: "M O D U L A R - YouTube",
    year: "2021",
    sourceTitle: "",
    link: "https://vimeo.com/486511696",
  },
  {
    author: "ash thorp",
    title: "FITC Tokyo 2015 Titles",
    year: "2015",
    sourceTitle: "",
    link: "https://vimeo.com/118919656",
  },
  {
    author: "GitHub, Inc.",
    title: "What is GitHub?",
    year: "2022",
    sourceTitle: "",
    link: "https://www.youtube.com/watch?v=pBy1zgt0XPc",
  },
];

let footer;
let ol;
reference.forEach((eachRef) => {
  if (eachRef.author || eachRef.title || eachRef.link) {
    if (!footer) {
      footer = document.createElement("footer");
      const h2 = document.createElement("h2");
      h2.innerHTML = "References";
      footer.prepend(h2);
      ol = document.createElement("ol");
    }
    const a = document.createElement("a");
    a.href = eachRef.link;
    a.innerHTML = `<li>
      ${eachRef.author ? `${eachRef.author} ` : `작자 미상 `}(${
      eachRef.year ? eachRef.year : `연도 미상`
    }),
          <em>${eachRef.title ? eachRef.title : `제목 미상`}.</em> ${
      eachRef.sourceTitle ? eachRef.sourceTitle : ``
    }
      </li>`;
    ol.append(a);
    console.log(ol);
  }
  if (footer) {
    footer.append(ol);
    document.querySelector("nav").after(footer);
  }
});
