import { Link, useLocation } from "react-router-dom";
import styles from './breadcrumb.module.scss';

interface BreadcrumbItem {
  label: string;
  path: string;
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {index > 0 && <span>/</span>}
          {location.pathname === item.path ? (
            <span>{item.label}</span>
          ) : (
            <Link to={item.path}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
