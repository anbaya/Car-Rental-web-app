import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCarBySlug } from '@/lib/data';
import ImageGallery from '@/components/cars/ImageGallery';
import VehicleSpecs from '@/components/cars/VehicleSpecs';
import styles from './car-details.module.css';

import { Metadata } from 'next';

interface CarDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CarDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getCarBySlug(slug);

  if (!vehicle) {
    return { title: 'Car Not Found | Marrakech Car Rental' };
  }

  return {
    title: `Rent ${vehicle.name} in Marrakech | Marrakech Car Rental`,
    description: vehicle.description || `Rent the ${vehicle.name} (${vehicle.type}) for ${vehicle.pricePerDay} DH/day.`,
    openGraph: {
      title: `Rent ${vehicle.name} in Marrakech`,
      description: vehicle.description || `Premium ${vehicle.type} available for ${vehicle.pricePerDay} DH/day.`,
      images: vehicle.images && vehicle.images.length > 0 ? [{ url: vehicle.images[0] }] : [],
    },
  };
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { slug } = await params;
  const vehicle = getCarBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className={styles.pageContainer}>
      <div className="wrap">
        <div className={styles.layout}>
          
          {/* Left Column: Gallery & Description */}
          <div className={styles.leftColumn}>
            <ImageGallery images={vehicle.images} alt={vehicle.name} />
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.description}>{vehicle.description}</p>
            </div>
            
            {vehicle.included && vehicle.included.length > 0 && (
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Included in Rental</h2>
                <ul className={styles.list}>
                  {vehicle.included.map((item, index) => (
                    <li key={index} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Specs, Price, CTA, Conditions */}
          <div className={styles.rightColumn}>
            <div className={styles.header}>
              <span className={styles.type}>{vehicle.type}</span>
              <h1 className={styles.title}>{vehicle.name}</h1>
            </div>

            <div className={styles.priceBlock}>
              <span className={styles.price}>{vehicle.pricePerDay} DH</span>
              <span className={styles.priceUnit}> / day</span>
            </div>

            <VehicleSpecs vehicle={vehicle} />

            <Link href={`/request?car=${vehicle.id}`} className={`btn btn-brass ${styles.requestBtn}`}>
              Request this car
            </Link>

            {vehicle.conditions && vehicle.conditions.length > 0 && (
              <div className={styles.section} style={{ marginTop: '16px' }}>
                <h2 className={styles.sectionTitle}>Rental Conditions</h2>
                <ul className={styles.list}>
                  {vehicle.conditions.map((item, index) => (
                    <li key={index} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}
