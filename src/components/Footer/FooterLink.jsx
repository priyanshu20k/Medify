import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function FooterLink({ children }) {
  return (
    <Link 
      href="#"
      underline="none" 
      color="#fff" 
      sx={{ 
        fontWeight: 300, 
        fontSize: 14,
        '&:hover': { color: 'primary.main' }
      }}
    >
      <Stack direction="row" sx={{ gap: 0.5, alignItems: "center" }}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
}
