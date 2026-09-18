import { useNavigate } from "react-router-dom";

function ManagerPage() {
  // =========================================================
  // ROUTER
  // Dùng để chuyển Center Manager về Login sau khi Logout
  // =========================================================
  const navigate = useNavigate();


  // =========================================================
  // HANDLE LOGOUT
  // Xóa thông tin authentication mock
  // =========================================================
  const handleLogout = () => {
    // Xóa role của user khỏi sessionStorage
    sessionStorage.removeItem("userRole");

    // TODO [BE INTEGRATION]:
    // Khi Backend Spring Boot hoàn thành authentication:
    // - Xóa access token / thông tin user
    // - Có thể gọi Logout API nếu Backend yêu cầu

    // Quay về Login
    navigate("/login", { replace: true });
  };


  return (
    <div>
      {/* =====================================================
          CENTER MANAGER DASHBOARD - TEMPORARY

          Trang tạm dùng để kiểm tra:
          - Login Center Manager
          - Protected Route
          - Logout

          TODO:
          Sau này thay bằng Center Manager Dashboard thật.
      ====================================================== */}

      <h1>Center Manager Dashboard</h1>

      <p>
        Đăng nhập thành công với quyền Center Manager.
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

export default ManagerPage;