import React from 'react';
import style from './Week.module.sass';
import Day from './Day';
import { addDays } from 'date-fns';

export default function Week ({ startDate }) {
  const daysArray = new Array(7).fill(null).map((_, index) => {
    const currentDay = addDays(startDate, index);
    return <Day dayNumber={currentDay} key={currentDay.toLocaleDateString()} />;
  });
  return <div className={style.dayWrapper}>{daysArray}</div>;
}
