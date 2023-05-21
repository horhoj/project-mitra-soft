import { FC } from 'react';
import styles from './AboutPage.module.scss';

interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = () => {
  return (
    <div className={styles.wrap}>
      <h2>Сведения об авторе проекта</h2>
      <p>Меня зовут Василий. Я занимаюсь фронтент разработкой.</p>
      <p>Основной стэк: JavaScript/TypeScript, react, redux-toolkit.</p>
      <p>
        Занимаюсь разработкой несколько лет, в том числе и с использованием
        других технологий и за пределами фронтенда.
      </p>
    </div>
  );
};
