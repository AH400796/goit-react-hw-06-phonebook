import Task from 'components/Task';
import { useSelector } from 'react-redux';
import { List, ListItem } from './TaskList.styled';
import { statusFilters } from 'redux/constants';
import { getTasks, getStatusFilter } from 'redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export default function TaskList() {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
}
