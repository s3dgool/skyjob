export interface UserProfileData {
    // Step 1: Personal Details
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    currentJobTitle: string;


    // Step 2: Professional Links
    linkedin: string;
    github: string;
    portfolio: string;

    // Step 3: Address
    country: string;
    state: string;
    city: string;

    // Step 4: Education
    education: EducationEntry[];

    // Step 5: Work Experience
    workExperience: WorkExperienceEntry[];

    // Step 6: Skills
    skills: string[];
}

export interface EducationEntry {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface WorkExperienceEntry {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    current?: boolean;
}

export const initialUserProfileData: UserProfileData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    currentJobTitle: "",
    linkedin: "",
    github: "",
    portfolio: "",
    country: "",
    state: "",
    city: "",
    education: [],
    workExperience: [],
    skills: [],
};
