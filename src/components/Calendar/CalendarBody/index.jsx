import React from 'react';
import style from './CalendarBody.module.sass';
import Month from './Month';

export default function CalendarBody () {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  return (
    <div className={style.calendarBodyWrapper}>
      <div className={style.innerWrapper}>
        <div className={style.monthHeader}>{monthName} {currentYear}</div>
        <Month />
      </div>
    </div>
  );
}
