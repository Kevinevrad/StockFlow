import img from "../../assets/loginBg.jpg";

const styles = {
  container: "h-screen w-screen flex items-center justify-center",
  containerBg: {
    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container} style={styles.containerBg}>
      {children}
    </div>
  );
};
