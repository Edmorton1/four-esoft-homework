import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Fallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      px={2}
    >
      <Typography variant="h5" gutterBottom>
        Произошла ошибка!
      </Typography>
      <Typography color="error" mb={2}>
        {error.message}
      </Typography>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Вернуться на главную
      </Button>
    </Box>
  );
}

export default Fallback;