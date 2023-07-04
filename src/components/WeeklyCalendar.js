import React from 'react';

class WeeklyCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      year: 2023,
      weekCount: this.getWeekCount(2023),
    };
  }

  getWeekCount(year) {
    const firstDayOfYear = new Date(year, 0, 1);
    const lastDayOfYear = new Date(year, 11, 31);
    const options = { week: 'numeric' };

    const firstWeek = firstDayOfYear.toLocaleString(undefined, options);
    const lastWeek = lastDayOfYear.toLocaleString(undefined, options);

    return lastWeek - firstWeek + 1;
  }

  renderCalendar() {
    const { year, weekCount } = this.state;
    const calendar = [];

    for (let week = 1; week <= weekCount; week++) {
      const weekStartDate = new Date(year, 0, (week - 1) * 7 + 1);
      const weekEndDate = new Date(year, 0, (week - 1) * 7 + 7);

      calendar.push(
        <tr key={week}>
          <td>Week {week}</td>
          <td>{weekStartDate.toLocaleDateString()}</td>
          <td>{weekEndDate.toLocaleDateString()}</td>
        </tr>
      );
    }

    return calendar;
  }

  render() {
    return (
      <div>
        <h1>Weekly Calendar for 2023</h1>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>{this.renderCalendar()}</tbody>
        </table>
      </div>
    );
  }
}

export default WeeklyCalendar;
