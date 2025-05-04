import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// const MachineCoder = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   return (
//     <div>
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="My Modal"
//       >
//         <p>This is a simple modal using Tailwind CSS.</p>
//         <div className="mt-4 text-right">
//           <button
//             onClick={() => setIsModalOpen(false)}
//             className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };
// export default MachineCoder;
