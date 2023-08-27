import { StyledBtn, Wrapper } from './contactList';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(item => {
        return (
          <Wrapper key={item.id}>
            {item.name}: {item.number}
            <StyledBtn
              onClick={() => {
                onDelete(item.name);
              }}
            >
              Delete
            </StyledBtn>
          </Wrapper>
        );
      })}
    </div>
  );
};
