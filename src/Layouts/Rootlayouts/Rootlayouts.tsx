import { FC, ReactNode } from 'react';

interface RootLayoutsProps {
    children: ReactNode;
}

const RootLayouts: FC<RootLayoutsProps> = ({ children }) => {
    return (
        <main>
            <nav>
                hello im nav
            </nav>
            <section className='container'>
                {children}
            </section>
            <footer>
                hello im footer
            </footer>
        </main>
    );
};

export default RootLayouts;