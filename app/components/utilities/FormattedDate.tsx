import React from 'react';

interface DataProps {
  date: Date;
  format: 'US' | 'BR' | 'US_DayMonth' | 'Year';
}

const FormattedDate: React.FC<DataProps> = ({ date, format }) => {
  const formatDate = (date: Date, format: 'US' | 'BR' | 'US_DayMonth' | 'Year'): string => {
    const optionsUS = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsBR = { day: 'numeric', month: 'long', year: 'numeric' };
    const optionsUSDayMonth = { month: 'long', day: 'numeric' };

    switch (format) {
      case 'US':
        return date.toLocaleDateString('en-US', optionsUS);
      case 'BR':
        return date.toLocaleDateString('pt-BR', optionsBR);
      case 'US_DayMonth':
        return date.toLocaleDateString('en-US', optionsUSDayMonth);
      case 'Year':
        return date.getFullYear().toString();
      default:
        return date.toDateString();
    }
  };

  return (
    <span>{formatDate(date, format)}</span>
  );
};

export default FormattedDate;
