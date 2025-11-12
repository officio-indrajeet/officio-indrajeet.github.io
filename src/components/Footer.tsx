const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Built with 
            <svg className="w-4 h-4 text-red-500 fill-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            by Indrajeet Kumar
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Indrajeet Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
