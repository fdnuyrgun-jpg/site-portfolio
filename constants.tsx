
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
  Search 
} from 'lucide-react';
import { Feature, Review, PricingPlan, Expert } from './types';

export const CURRICULUM = [
  {
    week: "Модуль 1",
    title: "Основы и Мышление",
    description: "Погружение в индустрию, настройка окружения и база выбранного направления.",
    topics: ["Введение в профессию", "Инструменты разработки", "Soft Skills специалиста"],
    icon: <Search className="w-5 h-5" />
  },
  {
    week: "Модуль 2",
    title: "Практический Интенсив",
    description: "Работа над первым реальным проектом под руководством ментора.",
    topics: ["Глубокое погружение в технологии", "Архитектурные паттерны", "Работа с API"],
    icon: <Code className="w-5 h-5" />
  },
  {
    week: "Модуль 3",
    title: "Масштабирование",
    description: "Сложные интерфейсы, оптимизация и работа в команде.",
    topics: ["State Management", "Тестирование кода", "CI/CD основы"],
    icon: <Layout className="w-5 h-5" />
  },
  {
    week: "Модуль 4",
    title: "Финальный Проект",
    description: "Создание портфолио и подготовка к выходу на рынок.",
    topics: ["Разработка MVP", "Подготовка к Tech-интервью", "Дипломная защита"],
    icon: <Database className="w-5 h-5" />
  }
];

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

// Added missing COMPANIES export for TrustBar component
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
