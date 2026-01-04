export type ServicePageDataType = {
  servicePageData: {
    banner: {
      mainTitle: string;
      subTitle: string;
    };
    pageTitle: {
      title: string;
    };
    sec_1: {
      mainTitle: string;
      percentages: {
        title: string;
        percentage: string;
      }[];
      img: any;
    };
    sec_2: {
      mainTitle: string;
      paragraphs: {
        highlightTitle: string;
        desc: string;
      }[];
    };
  };
};

export type CardDataType = {
  imgSrc: string;
  title: string;
  desc?: string;
};
