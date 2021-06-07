import React from 'react';
import style from './MonthHeader.module.sass';

export default function MonthHeader () {
  const weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((item, index) => {
    return <div key={index} className={style.cell}>{item}</div>;
  });
  return <div className={style.row}>{weekDayNames}</div>;
}
