export interface Dictionary {
    common: {
        home: string;
        dashboard: string;
        login: string;
        register: string;
        getStarted: string;
        profile: string;
        logout: string;
        languageName: string; // Changed from english/arabic to generic
    };
    home: {
        heroTitle: string;
        heroSubtitle: string;
        createProfile: string;
        goToDashboard: string;
        whySkyJob: string;
        whyTitle: string;
        tryWizard: string;
        features: string;
        featuresDesc: string;
        footerRights: string;
        terms: string;
        privacy: string;
    };
    wizard: {
        title: string;
        step: string;
        next: string;
        max: string;
        previous: string;
        submit: string;
        steps: {
            personal: string;
            links: string;
            address: string;
            education: string;
            work: string;
            skills: string;
        }
    };
    auth: {
        loginTitle: string;
        loginDesc: string;
        email: string;
        password: string;
        forgotPassword: string;
        dontHaveAccount: string;
        signUp: string;
        loginWithGoogle: string;
        registerTitle: string;
        registerDesc: string;
        firstName: string;
        lastName: string;
        createAccount: string;
        signupWithGithub: string;
        alreadyHaveAccount: string;
        signIn: string;
        loginWithFacebook?: string;
        loginWithLinkedin?: string;
        continueWith?: string;
        resetPasswordTitle?: string;
        resetPasswordDesc?: string;
        sendResetLink?: string;
        backToLogin?: string;
    };
    liveStats?: {
        totalUsers: string;
        topSpecializations: string;
        liveUpdates: string;
    };
    subscribers?: {
        latestJoiners: string;
        nearYou: string;
        globalList: string;
        viewAsOwner: string;
        viewAsUser: string;
        joined: string;
    };
    dashboard: {
        welcome: string;
        viewProfile: string;
        editProfile: string;
        profileCompletion: string;
        fromLastMonth: string;
        jobApplications: string;
        activeApplications: string;
        savedJobs: string;
        interestedJobs: string;
        recentActivity: string;
        latestActions: string;
        updatedProfile: string;
        addedExperience: string;
        appliedTo: string;
        justNow: string;
        daysAgo: string;
    };
    profile: {
        workExperience: string;
        education: string;
        skills: string;
        contact: string;
        contactMe: string;
        present: string;
    };
}
