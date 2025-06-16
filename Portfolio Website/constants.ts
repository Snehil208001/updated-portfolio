import { Project, Skill, ContactLink } from './types';

// --- PERSONALIZATION ---
// Replace these with your actual details.
export const YOUR_NAME = "Snehil"; 
export const YOUR_HEADLINE = "Android App Developer | Passionate Developer | Creative Thinker | Problem Solver";
export const YOUR_BIO = `Hello! I'm ${YOUR_NAME}, an Android App Developer based in [Your Location]. I graduated from Bharati Vidyapeeth College of Engineering Deemed University, Pune, and I specialize in building dynamic and user-friendly mobile applications. I'm passionate about creating intuitive experiences and continuously learning new technologies. In my free time, I enjoy Guitar and Singing and Cooking.`;
export const YOUR_EMAIL = "snehil09087@gmail.com"; 

// Path relative to index.html for your profile picture
export const YOUR_PROFILE_PICTURE_URL = "src/assets/snehil-profile.jpg.jpg"; 


// --- NAVIGATION ---
export const NAV_LINKS = [
  { id: 'about', title: 'About', href: '#about' },
  { id: 'skills', title: 'Skills', href: '#skills' },
  { id: 'projects', title: 'Projects', href: '#projects' },
  { id: 'contact', title: 'Contact', href: '#contact' },
];

// --- PROJECTS ---
// Add your projects here.
export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-SwipeRightly',
    title: 'SwipeRightly - Android Dating App',
    description: `In-Depth Project Explanation: SwipeRightly App 📱
This project is a fully functional dating app that demonstrates a modern, end-to-end Android development workflow. It's built on a solid architectural pattern and leverages the power of Firebase for its backend, resulting in a scalable and real-time user experience.

1. 🏗️ Architecture: MVVM & The Data Flow
The app is built using the Model-View-ViewModel (MVVM) architecture, which separates the UI from the business logic.

View (UI Layer): This is what the user sees. It's built entirely with Jetpack Compose. Screens like LoginScreen.kt, ProfileScreen.kt, and SwipeScreen.kt are composable functions that observe data from the ViewModel and react to changes, automatically updating the UI. They are responsible for how to display the data and for passing user actions (like button clicks) to the ViewModel.

ViewModel (SWViewModel.kt): This is the brain of the application. It holds and manages all the UI-related data. It never directly references the UI, which makes it highly testable. The SWViewModel is responsible for:

Calling the backend (Firebase) for data.
Handling all user actions (e.g., onLogin, onSignup, onLike).
Holding the app's state (e.g., inProgress, signedIn, userData) using mutableStateOf, so Compose can automatically react to changes.
Model (Data Layer): This represents the data and backend logic. It consists of:

Data Classes: Simple data containers like UserData, ChatData, and Message defined in DataTypes.kt.
Firebase: The backend services (Firestore, Authentication, Storage) that the ViewModel communicates with to fetch and store data.
2. 🔐 User Authentication Flow
The authentication process is handled securely by Firebase Authentication.

Sign Up (SignUpScreen.kt):

A new user enters their username, email, and password.
The onSignup function in SWViewModel.kt is triggered.
It first checks Firestore to ensure the username isn't already taken.
If the username is unique, it calls auth.createUserWithEmailAndPassword.
Upon success, a new user account is created in Firebase, and a corresponding user profile document is created in Firestore.
Login (LoginScreen.kt):

An existing user enters their email and password.
The onLogin function in SWViewModel.kt calls auth.signInWithEmailAndPassword.
If the credentials are correct, the signedIn state is updated, and the app navigates the user to the main SwipeScreen.
3. ❤️ The Swiping Mechanism (SwipeScreen.kt & SwipeableCard.kt)
This is the core feature of the app. It's a custom implementation that provides a great user experience.

The UI (SwipeScreen.kt): The screen displays a stack of profile cards. Each card is a ProfileCard composable.
The Gesture (SwipeableCard.kt): The swipeableCard Modifier is a custom modifier that detects drag gestures (detectDragGestures). As the user drags a card, it updates its offset and rotation to give a physical feel.
State Management (SwipeableCardState.kt): Each card has its own state, managed by the SwipeableCardState class. This class tracks the card's offset and the final direction of the swipe (Left, Right, Up, Down).
Processing Swipes:
When a swipe gesture is completed, the onSwiped callback is invoked.
In SwipeScreen.kt, this triggers either the vm.onDislike or vm.onLike function in the SWViewModel.
onLike Logic: When a user swipes right, the app checks if the other user has also swiped right on them (a "reciprocal match").
If it's a match: A popupNotification is shown, and a new chat document is created in the chat collection in Firestore, linking the two users.
If it's not a match yet: The current user's "like" is simply recorded in their swipeRight list in Firestore.
4. 💬 Real-time Chat (SingleChatScreen.kt)
Once two users match, they can chat in real time.

Fetching Messages: When a user opens a chat screen, the populateChat(chatId) function in the SWViewModel is called.
Live Updates: This function attaches a snapshot listener to the messages sub-collection in Firestore (db.collection(COLLECTION_CHAT).document(chatId).collection(COLLECTION_MESSAGES).addSnapshotListener).
Why this is powerful: A snapshot listener provides real-time updates. Whenever a new message is added to that collection in Firestore, Firebase automatically pushes the update to the app. The app's UI, built with Compose, observes the chatMessages state variable and automatically displays the new message without needing a manual refresh.
Sending Messages: When a user sends a message, the onSendReply function creates a Message object and adds it to the Firestore collection, which then gets pushed to both users' devices in real time.`,
    imageUrl: undefined, // Ensuring imageUrl is explicitly undefined or omitted
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firestore', 'MVVM', 'daggerHilt', 'Android SDK'],
    liveUrl: 'https://drive.google.com/drive/folders/1F7GbHq0D2syjN9_HfdHwydgnSFLwjLqP?usp=drive_link',
    sourceUrl: 'https://github.com/Snehil208001/SwipeRightly', 
  },
  {
    id: 'project-quickbuy',
    title: 'QuickBuy - Android Shopping App',
    description: `🛍️ Android Shopping App with Jetpack Compose & Firebase.\n\nThis is a modern, feature-rich e-commerce application for Android, built with the latest technologies to demonstrate a complete development lifecycle from user authentication to payment processing. It's a perfect showcase of clean architecture and modern UI development.\n\n✨ Key Features:\n- Sleek User Interface: Built entirely with Jetpack Compose for a dynamic, declarative, and responsive UI. Includes a smooth splash screen and intuitive navigation.\n- Firebase Integration: Utilizes Firebase for authentication (Email/Password, Google Sign-In), Firestore for real-time database, and Firebase Storage for product images.\n- MVVM Architecture: Follows MVVM (Model-View-ViewModel) for a clean, scalable, and testable codebase.\n- Feature Rich: Includes product listings, search, cart management, order history, and user profiles.`,
    imageUrl: undefined, // Ensuring imageUrl is explicitly undefined or omitted
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firestore', 'MVVM', 'Razorpay SDK ', 'Android SDK'],
    liveUrl: 'https://drive.google.com/drive/folders/1Ty3Itj-l4Oq_MXkY-Cunl6g25dRC__0O',
    sourceUrl: 'https://github.com/Snehil208001/QuickBuy', 
  },
  { 
    id: 'project-CollegeApp-Admin-User',
    title: 'CollegeApp-Admin-User', 
    description: `CollegeApp: A Comprehensive College Management Android App\n\nCollegeApp is a modern Android application built with Kotlin and Jetpack Compose to streamline communication and administration within a college ecosystem. The app provides two distinct experiences: a powerful Admin Panel for staff and a user-friendly interface for students, all powered by a robust Firebase backend.\n\nKey Features\n🔐 Admin Panel\nThe admin interface offers full control over the app's content, enabling staff to:\n\n- Manage Banners: Upload and delete promotional images for the home screen.\n- Broadcast Notices: Instantly share updates, news, and circulars with images and links.\n- Organize Gallery: Curate image galleries for events, campus life, and facilities.\n- Update Faculty Directory: Add and manage faculty profiles, categorized by department.\n- Edit College Information: Keep essential details like address, contact, and description current.\n\n👨‍🎓 User Panel\nThe user-facing side of the app provides students with easy access to important information:\n\n- Dynamic Home Screen: View scrolling banners, quick-access college info, and the latest notices.\n- Faculty Directory: Easily find and view profiles of faculty members.\n- Image Gallery: Explore categorized photo galleries of college events and infrastructure.\n- Detailed About Us: Access comprehensive information about the college.\n- Quick Navigation: A navigation drawer provides one-tap access to the college website, notices, and contact details.\n\nTechnologies & Tools Used 🛠️\n- Core: Kotlin\n- UI: Jetpack Compose\n- Backend & Database: Firebase (Firestore, Storage)\n- Image Loading: Coil\n- Navigation: Jetpack Navigation for Compose\n- UI Components: Accompanist Pager for the banner slider\n- Build System: Gradle Kotlin DSL\n\nThis project demonstrates a strong understanding of modern Android development practices, including MVVM architecture, clean UI/UX design, and seamless backend integration. It serves as a practical solution for educational institutions looking to modernize their administrative processes and enhance student engagement.`,
    imageUrl: undefined,
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firestore', 'MVVM', 'Coil', 'Android SDK'], 
    liveUrl: 'https://drive.google.com/drive/u/1/folders/140a2_bBSuqccb8sLNzdF8l_deb1Tzxh1', 
    sourceUrl: 'https://github.com/Snehil208001/CollegeApp-Admin-User-?tab=readme-ov-file', 
  },
  {
    id: 'project-portfolio',
    title: 'Personal Portfolio Website',
    description: `📄 My personal portfolio website (this one!).\n\nBuilt with React and Tailwind CSS to showcase my skills, projects, and provide a way to get in touch. It's designed to be responsive and easily updatable.\n\nKey Aspects:\n- Component-Based: Developed using React for a modular and maintainable structure.\n- Styled with Tailwind: Utilizes Tailwind CSS for rapid UI development and a clean, modern aesthetic.\n- Dynamic Content: Data like project details and skills are managed in a central constants file for easy updates.`,
    imageUrl: undefined,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'HTML'], 
    sourceUrl: 'https://github.com/Snehil208001/Portfolio', 
  },
  // Add more projects here
];

// --- SKILLS ---
// Add your skills here.
export const SKILLS_DATA: Skill[] = [
  // Languages
  { id: 'kotlin', name: 'Kotlin', level: 90, category: 'Languages' },
  { id: 'java', name: 'Java', level: 75, category: 'Languages' },
  { id: 'python', name: 'Python', level: 60, category: 'Languages' },
  
  // Frontend (Android Specific)
  { id: 'jetpack-compose', name: 'Jetpack Compose', level: 90, category: 'Frontend' },
  { id: 'android-sdk', name: 'Android SDK', level: 85, category: 'Frontend' },
  
  // Backend & APIs
  { id: 'firebase', name: 'Firebase (Auth, Firestore, Storage)', level: 85, category: 'Backend' },
  { id: 'retrofit', name: 'Retrofit', level: 80, category: 'Backend' },
  { id: 'ktor-client', name: 'Ktor (Client)', level: 70, category: 'Backend' },
  { id: 'rest-apis', name: 'REST APIs / API Calling', level: 85, category: 'Backend' },
  
  // Tools
  { id: 'android-studio', name: 'Android Studio', level: 90, category: 'Tools' },
  { id: 'git', name: 'Git & GitHub', level: 85, category: 'Tools' },
  
  // Other
  { id: 'mvvm', name: 'MVVM Architecture', level: 90, category: 'Other' },
  { id: 'clean-arch', name: 'Clean Architecture', level: 80, category: 'Other' },
];


// --- CONTACT & SOCIAL LINKS ---
// Add your contact links here.
export const CONTACT_LINKS_DATA: ContactLink[] = [
  { 
    id: 'email', 
    name: 'Email', 
    url: `mailto:${YOUR_EMAIL}`, 
    // icon: <MailIconComponent /> // Example: you'd use an actual icon component here
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    url: 'https://github.com/Snehil208001',
    // icon: <GitHubIconComponent /> 
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/snehil-snehil-9779a336b/', // Replace with your LinkedIn URL
    // icon: <LinkedInIconComponent />
  },
  // Add other social media links here (e.g., Twitter, dev.to)
];

// --- FOOTER ---
export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${YOUR_NAME}. All rights reserved.`;