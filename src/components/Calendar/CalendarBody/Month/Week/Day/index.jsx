import React from 'react';
import style from './Day.module.sass';
import { isThisMonth, format } from 'date-fns';
import cx from 'classnames';

export default function Day ({ dayNumber }) {
  const today = new Date().getDate();
  const day = dayNumber.getDate();
  return (
    <div
      className={cx(
        isThisMonth(dayNumber) ? style.thisMonthDay : style.otherMonthDay,
        style.day,
        day === today ? style.today : null
      )}
    >
      {day} //если написать format(day, 'dd') почему то выводит только 01, хотя
      в консоли все отображается нормально
    </div>
  );
}
