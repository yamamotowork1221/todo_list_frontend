type Props = {
    setActiveCreateTaskForm: React.Dispatch<React.SetStateAction<'inactive' | 'active'>>;
};

type SignUpFormInputs = {
    username: string;
    email: string;
    password: string;
};

export const CreateTaskButton = ({ setActiveCreateTaskForm }: Props) => {
    return (
        <button
            className="w-12 h-12 absolute bottom-8 right-8 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700  rounded-full font-semibold transition-colors duration-200"
            onClick={() => setActiveCreateTaskForm('active')}
        >
            ＋
        </button>

    );
};