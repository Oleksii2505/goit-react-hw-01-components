import PropTypes from "prop-types";
import { StatisticsSection, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
    <StatisticsSection>
        {title && <Title>{title}</Title>}
        <StatList>
        {stats.map(({id, label, percentage}) => {
            return (<StatItem key={id} length={stats.length}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
            </StatItem>);
          })
          }
        </StatList>
    </StatisticsSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};