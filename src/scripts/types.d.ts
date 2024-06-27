export interface IExperience {
  image: string,
  company: string,
  position: string,
  date: string,
}

export interface IProject {
  img: {
    url: ImageMetadata;
    alt: string;
  };
  title: string;
  inputStack: string[];
  description: string;
  preview: {
    url: string;
    label: string;
  };
}