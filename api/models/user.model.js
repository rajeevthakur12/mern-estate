import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAACUCAMAAAAUNB2QAAAAMFBMVEXk5ueutLfn6eqrsbTh4+Ta3d7Jzc/q7O3AxcfT1tiorrK1ur27wMOxt7rW2dvDyMqQT5I4AAAEsElEQVR4nO2cS3arMAxAQf7hH+x/t08meW1oExLbIlJzuJOeduRbW1g2EsNwcnJycnJycnJycvLBAAyD1sZ7uyDWG631ANyjqgMGPdspqhCCKuDPMU6o8odEnPY2jUGNW1QYk53/iIfTNmX1U+EqonKyg+Me4lMAbBzvK1xFxmid8Plwc95T+D8hRvJ0wJDCM4eVMAkOj3l3LW3mI85CNbR9WaKEh+ce71309LpD0VCLwFWlU5VE8ZAXHBBrJQRquAaJVUMSLTOxaizcI78BpiaHomHFrCmwrRKIlH0DzPOs4/FkZM09/gv1z9iNRhKRU4HtkcCcyktYU7pPAhFg4brW0wr/mgL9Wi6+i+G2cLFfYpyY1xQYgqkYuQ8b0B8VY0lEWC1wwyOQwJOf4dRwPbnHrQbvnkGyoEqKzpiHwEyyoBDOJdWVzG4InHcJdRcGexYL25ICk4gkcEnxWZCFBcY3n4Wn2LgvBL5cqvNksbGwXBKVt4G7KLaMkDC4MbyZLEBTZOVfcFnQpIJXFJsFXVigBY8EsUXgsphJLZi2PeK5+AwLHgm0IJRgjG7KJy3fftH47uUu+SMykMRlQZoN8l1JWcLzBdvB+zNOSTCTSTCeWDG8yQIjMV6r0d3ksB1YSW/VGO/+CW84Wd8XU902810NDp9y8w+a5i0M5xMKcc11LBuYa1poTkqR+1Wxo8hrud8UY2Lbn0sJKMtxU6+GWtgrKHAyuueCfT0NJT/vrCySUa3Wd+Tju/Lf0nWLoHgzqBs+ovoRNZbWyWAundgCjaEhqJy20FZhJKq0eaVBQ17vAujqPRzP2sIkhtIKUzcbIiUQX9PRo2R29FQVnONmJ3IiCuCWB02TPxxG2Y2Hbk5Pl5XKSXTX4bB2gO57oIMHyRNxAbSf8q+G4quCyouXGxEbYDA+qTud0Sp5I/PxepfSaD8vMVy71MvPEJdZD3/I4Qrg8p+9LXij/0AsPAK+4R5KLeuY9Yr5Zv39MkHSWcdvyjJappRizOWxtG6EOcY0Lbi2vCmrS6wKjszMZfQxqws/n7KXP+ZiIzJQwIHxC/7zx1+Dv7trqIwzYw0IykPADfhUzXl8KYe62QBznLyWIeLghdRpxyVazZ1U4YaQQuc9Le6Hnu9OCkAbm0mqD4KaZpaPz0BJ+kayCgoVkn17igVgbKoK5hc8MNF6q4fTNtI6XETyNL8t0h3Y3P5U2udtx0BnD5iGb95z1WZoHks7GsoenJwAZZHdQ0I6Msxh8JRVm49Roz3scA5mOjQiNh7xoBcb7k0TcdUYj7jGBVfzXSUSEvmqAqpKqApUJm5upS3GflmDtsgWXvjm2yEEwvd+UPNiglyDyMPxSaz15yQazr9tlzhOA2eCFwoNyu7nVo3uuueub0ORafQ+cPu+DUWF6ix5eUci/hyVe5KR3g9ckaE6+qZp2wq7ULb5OO4ERPYXrZmha67dOgDV2gknZz2ttCWGQNlT2I9qKkYH7szjJ02FbTL2u1sajn7ipqItn5Kxa2+pfVlD2RZJRn1Tn6S94ptKCdrPrlBR2x5A2C1MSO1XYCXG9lj9GRru4T4gzDUSFB86PYK6FibCTwEQc9fiH+HEP18bV3qdAAAAAElFTkSuQmCC",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
