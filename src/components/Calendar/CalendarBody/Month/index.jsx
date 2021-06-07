import React, { useState } from 'react';
import MonthHeader from './MonthHeader';
import style from './Month.module.sass';
import Week from './Week';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';

export default function Month () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: setDate(currentDate, 1),
    end: endOfMonth(currentDate),
  });

  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div>
      <MonthHeader />
      <div className={style.weekWrapper}>{weeks}</div>
    </div>
  );
}
