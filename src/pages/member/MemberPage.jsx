import { useNavigate } from "react-router-dom";

function MemberPage() {
  // =========================================================
  // ROUTER
  // Dùng để chuyển người dùng về trang Login sau khi Logout
  // =========================================================
  const navigate = useNavigate();


  // =========================================================
  // HANDLE LOGOUT
  // Xóa thông tin đăng nhập mock khỏi sessionStorage
  // =========================================================
  const handleLogout = () => {
    // Xóa role đã lưu khi Login
    sessionStorage.removeItem("userRole");

    // TODO [BE INTEGRATION]:
    // Khi sử dụng authentication thật:
    // - Xóa access token / thông tin user
    // - Có thể gọi Logout API nếu Backend yêu cầu

    // Chuyển người dùng về trang Login
    navigate("/login", { replace: true });
  };


  return (
    <div>
      {/* =====================================================
          MEMBER DASHBOARD - TEMPORARY

          Trang tạm dùng để kiểm tra:
          - Login Member
          - Protected Route
          - Logout

          TODO:
          Sau này thay bằng Member Dashboard thật.
      ====================================================== */}

      <h1>Member Dashboard</h1>

      <p>
        Đăng nhập thành công với quyền Member.
      </p>


      {/* =====================================================
          LOGOUT BUTTON
      ====================================================== */}
      <button
        type="button"
        onClick={handleLogout}
      >
        Đăng xuất
      </button>
    </div>
  );
}

export default MemberPage;