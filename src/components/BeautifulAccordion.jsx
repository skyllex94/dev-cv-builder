import React from "react";
import ContPanelSections from "./ContPanelSections";
import ContPanelFonts from "./ContPanelFonts";

const data = [
  {
    title: "Sections",
    content: <ContPanelSections />,
  },
  {
    title: "Fonts",
    content: <ContPanelFonts />,
  },
];

class BeautifulAccordion extends React.Component {
  render() {
    return (
      <div {...{ className: "wrapper" }}>
        <ul {...{ className: "accordion-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: true,
  };

  render() {
    const {
      props: { content, title },
      state: { opened },
    } = this;

    return (
      <>
        <div
          {...{
            className: `accordion-item, ${opened && "accordion-item--opened"}`,
          }}
        >
          <div
            {...{
              className: "accordion-item__line",
              onClick: () => {
                this.setState({ opened: !opened });
              },
            }}
          >
            <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
            <span {...{ className: "accordion-item__icon" }} />
          </div>

          <div {...{ className: "accordion-item__inner" }}>
            <div {...{ className: "accordion-item__content" }}>
              <div {...{ className: "accordion-item__paragraph" }}>
                {content}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BeautifulAccordion;
