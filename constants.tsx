import React from 'react';
import { 
  Users, 
  Award, 
  Zap, 
  Target, 
  CheckCircle2, 
  Code, 
  Layout, 
  Database, 
  Search,
  Terminal,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { Feature, Review, PricingPlan, Expert } from './types';

export const TRACKS = [
  { id: 'frontend', label: 'Frontend Разработка', icon: <Layout className="w-4 h-4" /> },
  { id: 'backend', label: 'Python Backend', icon: <Terminal className="w-4 h-4" /> },
  { id: 'qa', label: 'QA Инженер', icon: <ShieldCheck className="w-4 h-4" /> }
];

export const CURRICULUM = {
  frontend: [
    {
      week: "Модуль 1",
      title: "Основы и Мышление",
      description: "Погружение в индустрию, настройка окружения и база JavaScript.",
      topics: ["Введение в профессию", "Инструменты разработки", "Soft Skills специалиста"],
      icon: <Search className="w-5 h-5" />
    },
    {
      week: "Модуль 2",
      title: "React и Экосистема",
      description: "Работа над первым реальным SPA приложением под руководством ментора.",
      topics: ["Компонентный подход", "Хуки и состояние", "Работа с API"],
      icon: <Code className="w-5 h-5" />
    },
    {
      week: "Модуль 3",
      title: "Архитектура",
      description: "Сложные интерфейсы, оптимизация и работа в команде.",
      topics: ["State Management (Redux)", "Тестирование кода", "CI/CD основы"],
      icon: <Layout className="w-5 h-5" />
    },
    {
      week: "Модуль 4",
      title: "Финальный Проект",
      description: "Создание портфолио и подготовка к выходу на рынок.",
      topics: ["Разработка MVP", "Подготовка к Tech-интервью", "Дипломная защита"],
      icon: <Database className="w-5 h-5" />
    }
  ],
  backend: [
    {
      week: "Модуль 1",
      title: "Python Основы",
      description: "Синтаксис языка, структуры данных и алгоритмическое мышление.",
      topics: ["Типы данных Python", "ООП парадигма", "Git и командная строка"],
      icon: <Terminal className="w-5 h-5" />
    },
    {
      week: "Модуль 2",
      title: "Django & API",
      description: "Разработка серверной части веб-приложений.",
      topics: ["Django Framework", "REST API", "Работа с базами данных"],
      icon: <Database className="w-5 h-5" />
    },
    {
      week: "Модуль 3",
      title: "DevOps для Backend",
      description: "Развертывание приложений и контейнеризация.",
      topics: ["Docker & Kubernetes", "Linux администрирование", "Cloud сервисы"],
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      week: "Модуль 4",
      title: "Highload Проект",
      description: "Разработка масштабируемого сервиса для портфолио.",
      topics: ["Асинхронность", "Микросервисы", "Финальный проект"],
      icon: <Code className="w-5 h-5" />
    }
  ],
  qa: [
    {
      week: "Модуль 1",
      title: "Теория Тестирования",
      description: "Виды тестирования, тест-дизайн и документация.",
      topics: ["Жизненный цикл ПО", "Баг-репорты", "Тест-кейсы"],
      icon: <Search className="w-5 h-5" />
    },
    {
      week: "Модуль 2",
      title: "Ручное Тестирование",
      description: "Практика тестирования веб и мобильных приложений.",
      topics: ["DevTools", "API Testing (Postman)", "SQL для QA"],
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      week: "Модуль 3",
      title: "Автоматизация",
      description: "Введение в автотесты на Python/JS.",
      topics: ["Selenium / Playwright", "PyTest", "CI/CD пайплайны"],
      icon: <Code className="w-5 h-5" />
    },
    {
      week: "Модуль 4",
      title: "Старт Карьеры",
      description: "Подготовка к сертификации и собеседованиям.",
      topics: ["ISTQB подготовка", "Мок-интервью", "Трудоустройство"],
      icon: <Award className="w-5 h-5" />
    }
  ]
};

export const FEATURES: Feature[] = [
  { id: 1, title: "Индивидуальный трек", description: "Программа адаптируется под ваш темп.", icon: "Target" },
  { id: 2, title: "Практика", description: "Минимум теории, максимум реальных кейсов.", icon: "Zap" },
  { id: 3, title: "Комьюнити", description: "Доступ к закрытому чату с кураторами.", icon: "Users" },
  { id: 4, title: "Сертификация", description: "Диплом после успешного завершения.", icon: "Award" }
];

export const PRICING: PricingPlan[] = [
  {
    id: 1,
    name: "Базовый",
    price: "19 900 ₽",
    description: "Для самостоятельного старта.",
    features: ["Доступ к лекциям", "Тесты", "Общий чат", "Сертификат"]
  },
  {
    id: 2,
    name: "Продвинутый",
    price: "34 900 ₽",
    description: "Самый популярный выбор.",
    features: ["Все из Базового", "Проверка ДЗ", "Воркшопы", "Помощь с резюме"],
    isPopular: true
  },
  {
    id: 3,
    name: "VIP",
    price: "89 900 ₽",
    description: "Личное наставничество.",
    features: ["Все из Продвинутого", "Личный ментор", "Гарантия оффера", "VIP-встречи"]
  }
];

export const EXPERTS: Expert[] = [
  {
    id: 1,
    name: "Александр Волков",
    role: "Senior Product Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "10+ лет в IT, развивал продукты в Google и Yandex."
  },
  {
    id: 2,
    name: "Марина Соколова",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Эксперт по росту бизнеса с опытом управления бюджетами 50M+."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Иван Петров",
    role: "Frontend в Avito",
    text: "Курс полностью изменил мое представление об обучении. Задачи максимально приближены к реальным.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Елена Кузнецова",
    role: "UI в Tinkoff",
    text: "Нашла работу еще до окончания обучения. Карьерный центр помог докрутить портфолио.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const COMPANIES = [
  "Google",
  "Yandex",
  "Avito",
  "Tinkoff",
  "Sber",
  "Ozon",
  "MTS",
  "Kaspersky"
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6 text-indigo-600" />,
  Zap: <Zap className="w-6 h-6 text-indigo-600" />,
  Users: <Users className="w-6 h-6 text-indigo-600" />,
  Award: <Award className="w-6 h-6 text-indigo-600" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-500" />
};
