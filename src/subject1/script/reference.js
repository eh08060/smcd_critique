const reference = [
  {
    author: "",
    title: "",
    year: "",
    sourceTitle: "",
    link: "",
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
