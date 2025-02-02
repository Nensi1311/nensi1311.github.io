import BiLevelLogo from "../assets/images/bilevellogo.jpg"; 
import QALogo from "../assets/images/QAlogo.jpg";
import FakeNewsLogo from "../assets/images/fakenewslogo.jpg";
import MovieLogo from "../assets/images/movielogo.jpg";
import IrisLogo from "../assets/images/irislogo.jpg";
import ResultLogo from "../assets/images/resultlogo.jpg";

const data = [
  {
    name: "Bi-Level Image Classification",
    type: "Deep Learning/Computer Vision",
    url: "https://github.com/Nensi1311/IAB_Categories_Classifications",
    github: "https://github.com/Nensi1311/IAB_Categories_Classifications",
    image: BiLevelLogo,
    slug: "bi-level-image-classification",
    description:
      "Bi-Level Image Classification that classifies images into both main and sub-categories using advanced deep learning and computer vision techniques.",
    tech: ["Python", "Deep Learning", "Computer Vision", "Streamlit"],
  },
  {
    name: "Question Answer Generation",
    type: "NLP",
    url: "https://github.com/Nensi1311/Question-Answer-Generation-using-NLP",
    github: "https://github.com/Nensi1311/Question-Answer-Generation-using-NLP",
    image: QALogo,
    slug: "question-answer-generation",
    description:
      "Question Generation and Answering System that automatically generates relevant questions and provides accurate answers from a given paragraph.",
    tech: ["Python", "NLP", "NLTK", "Transformers"],
  },
  {
    name: "Fake News Detection",
    type: "Machine Learning",
    url: "https://github.com/Nensi1311/Fake-News-Detection",
    github: "https://github.com/Nensi1311/Fake-News-Detection",
    image: FakeNewsLogo,
    slug: "fake-news-detection",
    description:
      "Fake News detection using machine learning to identify whether the news articles are True or Fake.",
    tech: ["Python", "Machine Learning"],
  },
  {
    name: "Movie Recommendation System",
    type: "NLP",
    url: "https://github.com/Nensi1311/Movie_Recommendation_System",
    github: "https://github.com/Nensi1311/Movie_Recommendation_System",
    image: MovieLogo,
    slug: "movie-recommendation-system",
    description:
      "A Movie Recommendation System that suggests movies based on user input using Count Vectorization and Cosine Similarity to measure similarity between films.",
    tech: ["Python", "NLP", "Streamlit"],
  },
  {
    name: "Iris Flower Classification",
    type: "Machine Learning",
    url: "https://github.com/Nensi1311/Iris-Classifier",
    github: "https://github.com/Nensi1311/Iris-Classifier",
    image: IrisLogo,
    slug: "iris-flower-classification",
    description:
      "An Iris Flower Classification using machine learning to predict species (Setosa, Versicolor, Virginica) based on sepal and petal features of iris flower.",
      tech: ["Python", "Machine Learning"],
  },
  {
    name: "Student Grade Report",
    type: "C++",
    url: "https://github.com/Nensi1311/Student-Grade-Report",
    github: "https://github.com/Nensi1311/Student-Grade-Report",
    image: ResultLogo,
    slug: "student-grade-report",
    description:
      "A Student Grade Report System in C++ that manages student records, calculates grades, CGPA and displays a detailed report with academic status. It efficiently processes multiple students' data using structured storage.",
    tech: ["C++"],
  },
];

export function getData() {
  return data;
}