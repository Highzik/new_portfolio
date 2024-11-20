import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../mockData/data";

export default function ResponsiveMenu({ open }) {
  return (
    <div className="font-poppins">
      <AnimatePresence>
        {
          open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-20 left-0 w-full h-screen z-20"
            >
              <div className="text-xl font-semibold uppercase bg-red-300 text-white py-10 m-6 rounded-3xl">
                <ul className="flex flex-col justify-center items-center gap-10">
                  {NavbarMenu.map((items) => {
                    return (
                      <li key={items.id}>
                        <a href={items.link}>{items.title}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}
