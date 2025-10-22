export interface Speaker {
  name: string;
  status: string;
  linkedin: string;
  category: string;
  image: string;
}

export const speakers: Speaker[] = [
  {
    name: "Xiaoquan Kong",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/xiaoquankong/",
    category: "Build with AI",
    image: "https://media.licdn.com/dms/image/v2/D5635AQElQF6dG8VUMA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1726550638664?e=1761703200&v=beta&t=6sIATn6oDVGU_EH9ayZi4hIxRmbIgRzJl91soOrF7Ws",
  },
  {
    name: "Laurence Svekis",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/svekis/",
    category: "Build with AI",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGSsiA5d_bRnA/profile-displayphoto-crop_800_800/B56ZiHVaaAG4AY-/0/1754617195523?e=1762992000&v=beta&t=UUKJl_qtVBuxAn1h2NC6O9a5RtqBfKtov2q4XSo-_wE",
  },
  {
    name: "Noble Ackerson",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/noblea/",
    category: "Build with AI",
    image: "https://media.licdn.com/dms/image/v2/C5103AQHR_cfL9851CA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516264187143?e=1762992000&v=beta&t=qxj_wn9hwW9ZerFnEg9-K64sd63IJ0kbu9LMV3s53Wc",
  },
  {
    name: "Gerardo Sanchez",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/gsans7/",
    category: "Entrepreneurship",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEb9D1W2FpM7g/profile-displayphoto-crop_800_800/B4EZhru0I4HEAI-/0/1754154091500?e=1762992000&v=beta&t=P3DOnxbHF49UaTheJ71ELX1F5teVZGiXE0tvkzdDlww",
  },
  {
    name: "Richard Foltak",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/richard-foltak/",
    category: "Entrepreneurship",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHReDcZDZz-ZQ/profile-displayphoto-scale_400_400/B4EZmcIPyHGoAk-/0/1759261031975?e=1762992000&v=beta&t=iM5BwVo-jPmVMy26wiTOQul-4qQ8ex7FCbkyYT4lxn0",
  },
  {
    name: "Carlos Vasquez",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/juancvazquez/",
    category: "Entrepreneurship",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQE01axUJ9mOmg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1621274116338?e=1762992000&v=beta&t=wCo4KnnyBNtbF75WYcn6pXzoTRo1zgf_2Ro_-CgRxJM",
  },
  {
    name: "Angela Rodriguez",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/angiemarierodriguez/",
    category: "Career Spotlight",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHRKMTCGHThvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720733888544?e=1762992000&v=beta&t=olVmVR729K09LC97cEv_w2MEDahIdfj0ZqI0psDn6o0",
  },
  {
    name: "James Gress",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/jamesgress/",
    category: "Career Spotlight",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHHsmJsuvDQgA/profile-displayphoto-shrink_800_800/B4EZZDwin9HYAc-/0/1744893520944?e=1762992000&v=beta&t=l6hSz2iTU7-FTQpV1gpwKsoyVUBegOtunN77iEAuZkc",
  },
  {
    name: "Modupe Ajala",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/modupeajala-3288/",
    category: "Career Spotlight",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHeTY6SgiYmVQ/profile-displayphoto-scale_400_400/B4EZmTwxVfKUAg-/0/1759120661614?e=1762992000&v=beta&t=H5bEOAAPMecB8hXLfDSsaSa6GkLE3ZMDP5pp6ykmJ_Y",
  },
];

// Map track names to speaker categories
export const trackToCategory: { [key: string]: string } = {
  "Build with AI 🤖": "Build with AI",
  "Entrepreneurship 💡": "Entrepreneurship",
  "Industry Spotlight 🌟": "Career Spotlight",
};
