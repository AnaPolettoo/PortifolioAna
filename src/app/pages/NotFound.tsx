import { Link } from "react-router";
import { motion } from "motion/react";
import { Home as HomeIcon, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <AlertCircle className="w-12 h-12" style={{ color: "#7c3aed" }} />
          </div>
          <h1 className="text-6xl mb-4" style={{ fontWeight: 600 }}>404</h1>
          <p className="text-2xl text-muted-foreground mb-8">Page not found</p>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full mx-auto"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
              color: "white"
            }}
          >
            <HomeIcon className="w-5 h-5" />
            Back to Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
