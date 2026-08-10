export default function Container({ children, className = "" }) {
    return (
        <div className={`mx-auto w-full min-w-0 max-w-7xl px-6${className}`}>
            {children}
        </div>
    );
}