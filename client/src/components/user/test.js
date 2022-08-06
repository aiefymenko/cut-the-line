{
  location.pathname.includes("admin") ? (
    <Button variant="secondary" onClick={handleClose}>
      Back
    </Button>
  ) : (
    <NavLink to="/user">
      <Button variant="secondary" onClick={handleClose}>
        Back
      </Button>
    </NavLink>
  );
}
{
  location.pathname.includes("admin") ? (
    <Button type="submit" variant="primary" onClick={onSave}>
      Save Changes
    </Button>
  ) : (
    <NavLink to="/user/wait">
      <Button type="submit" variant="primary" onClick={onSave}>
        Save Changes
      </Button>
    </NavLink>
  );
}
