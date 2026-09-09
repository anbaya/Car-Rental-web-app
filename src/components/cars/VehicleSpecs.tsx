import type { Vehicle } from '@/types';
import styles from './specs.module.css';

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export default function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  return (
    <div className={styles.specsGrid}>
      <div className={styles.specItem}>
        <div className={styles.specIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <span>{vehicle.transmission}</span>
      </div>

      <div className={styles.specItem}>
        <div className={styles.specIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <span>{vehicle.seats} Seats</span>
      </div>

      <div className={styles.specItem}>
        <div className={styles.specIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.4-1.7-1-2l-3-4H6L3 11c-.6.3-1 1.1-1 2v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
        <span>{vehicle.doors} Doors</span>
      </div>

      <div className={styles.specItem}>
        <div className={styles.specIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 22v-8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v8" />
            <path d="M3 22h8" />
            <path d="M11 15h4c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-4v10" />
            <path d="M17 5h4" />
            <path d="M21 5v14h-4" />
          </svg>
        </div>
        <span>{vehicle.fuel}</span>
      </div>

      {vehicle.hasAc && (
        <div className={styles.specItem}>
          <div className={styles.specIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20" />
              <path d="M8.5 4.5l7 15" />
              <path d="M15.5 4.5l-7 15" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span>A/C</span>
        </div>
      )}
    </div>
  );
}
